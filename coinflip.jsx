
var heads = 0;
var tails = 0;

var Application = React.createClass({
    render: function() {
        return(
            <div className="application">
                <div>
                    <Coin />

                </div>
            </div>
        )
    }
})

var Coin = React.createClass({

    sides: [
        `http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-head.jpg`,
        `http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg`,
    ],

    getInitialState: function() {
        let x = Math.round(Math.random());
        console.log(x);
        return{
            image: this.sides[x],
            side: x
        }
    },

    flipCoin: function() {
        let x = Math.round(Math.random());
        console.log(x);
        this.setState({
            image: this.sides[x],
            side: x
        })
    },

    render: function() {
        return(
            <div className="coin">
                <div><img src={this.state.image} /></div>
                <button onClick={this.flipCoin}>Flip coin</button>
                <Tally side={this.state.side} />
            </div>
        )

    }
})

function Tally(props) {
    if (props.side === 0) {
        heads++;
    } else {
        tails++;
    }
    return(
        <div className="tally">
            <div className="heads">Heads: {heads}</div>
            <div className="tails">Tails: {tails}</div>
        </div>
    )
}


ReactDOM.render(
    <Application />,
    document.getElementById('container')
);
