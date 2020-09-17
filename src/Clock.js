import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        };
    };

    tick = (e) => {
        this.setState({
            time: new Date()
        });
    };

    componentDidMount(){
        //do something?
        const interval = setInterval(this.tick, 1000);
        this.setState({interval: interval})
    }

    stopClock = () => {
        clearInterval(this.state.interval)
    }



    render() {
        const { time } = this.state;
        return (
            <div>
                <h1 className="heyGirl">Hey girl, what's the time?</h1>
                <h4 className="clock">{`Military time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</h4>
                <button className="stopBtn" onClick={this.stopClock}>STOP CLOCK OMGEE</button>
                <div className="wow">
                    <p>WOW!</p>
                </div>
            </div>
        )

    };

};

export default Clock;
