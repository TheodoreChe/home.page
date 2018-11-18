import React, { PureComponent } from "react";
import raf from "raf";

export default (Component, { refreshRate } = { refreshRate: 60}) => {
  class TL extends PureComponent {
    static displayName = `timeLoop`;

    state = {
      time: 0,
      tick: 0
    };

    componentDidMount() {
      this.onPausedChange(this.props.paused);
    }

    componentWillReceiveProps({ paused }) {
      if (this.props.paused !== paused) {
        this.onPausedChange(paused);
      }
    }

    componentWillUnmount() {
      raf.cancel(this._r);
    }

    startLoop = () => {
      let startTime, lastTime;
      let interval = 1000 / refreshRate;
      lastTime = -interval;
      const loop = t => {
        this._r = raf(loop);
        if (!startTime) startTime = t;
        if (t - lastTime > interval) {
          lastTime = t;
          this.setState({
            time: t - startTime,
            tick: this.state.tick + 1
          });
        }
      };
      this._r = raf(loop);
    };

    onPausedChange = paused => {
      if (paused) {
        raf.cancel(this._r);
      } else {
        this.startLoop();
      }
    };

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }
  return TL;
};
