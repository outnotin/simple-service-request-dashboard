var alignCenter = {
    "text-align": "center"
}

class Test extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
           <div>
               <div className="col-md-2 col-sm-6 col-xs-6 num-container">
                <div className="inner-container">
                    <span className="box-title">Access</span>
                    <span className="box-number" id="access-number">332</span>
                </div>
               </div>
               <div className="col-md-2 col-sm-6 col-xs-6 num-container">
                <div className="inner-container">
                    <span className="box-title">Equipment</span>
                    <span className="box-number" id="equipment-number">184</span>
                </div>
               </div>
               <div className="col-md-2 col-sm-6 col-xs-6 num-container">
                <div className="inner-container">
                    <span className="box-title">Software</span>
                    <span className="box-number" id="software-number">53</span>
                </div>
               </div>
               <div className="col-md-2 col-sm-6 col-xs-6 num-container">
                <div className="inner-container">
                    <span className="box-title">In Process</span>
                    <span className="box-number" id="in-progress-number">5</span>
                </div>
               </div>
               <div className="col-md-2 col-sm-6 col-xs-6 num-container">
                <div className="inner-container">
                    <span className="box-title">Ticket Raised</span>
                    <span className="box-number" id="ticket-raised-number">564</span>
                </div>
               </div>
               <div className="col-md-2 col-sm-6 col-xs-6 num-container">
                <div className="inner-container">
                    <span className="box-title" id="total-number">Total</span>
                    <span className="box-number">569</span>
                </div>
               </div>
           </div>
        );

    }

}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
);