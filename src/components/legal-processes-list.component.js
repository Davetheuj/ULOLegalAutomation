import React, {Component} from 'react';
import '../App.css';

export default class LegalProcessView extends Component {
   

    constructor(props){
        super(props);
        this.state = {

        }
  
    }

    render() {
        return (
            <div className = 'body' >

                <form onSubmit = {this.onSubmit}>
                        <br/>
                        <h1>Small Claims Process</h1>
                        <br/>
                        <br/>
            <h3>What Is Small Claims Court?</h3>	
            <p>Small claims court is a special court where disputes are resolved quickly and inexpensively. In small claims court, the rules are simplified and the hearing is informal. Attorneys are generally not allowed. The person who files the claim is called the <a href="glossary.shtml#plaintiff"><strong>plaintiff</strong></a>. The person against whom the claim is filed against is called the <a href="glossary.shtml#defendant"><strong>defendant</strong></a>. They are also called <a href="glossary.shtml#claimant"><strong>claimants or parties</strong></a>. You don’t need to be a United States citizen to file or defend a case in small claims court. If you are a non-English speaker, see <a href="court.shtml#interpret">information on an interpreter</a>.</p>
            <p>In general, claims are limited to disputes up to $5,000. However, <a href="glossary.shtml#naturalperson"><strong>natural persons</strong></a> (individuals) can claim up to $10,000. Corporations, partnerships, unincorporated associations, governmental bodies, and other legal entities cannot claim more than $5,000. Also, no claimant (natural person or legal entity) may file <em>more than two</em> small claims court actions for more than $2,500 anywhere in the state during any calendar year. For example, if you file an action for $4,000 in February 2015, and another action for $4,000 in March 2015, you may not file any more actions for more than $2,500 until January 1, 2016. You may file as many claims as you wish for $2,500 or less. However, this limitation does not apply to a city, county, city and county, school district, county office of education, community college district, local district, or any other local public entity. They can bring more than two lawsuits over $2,500 in a calendar year.</p>
            <p>The fee for filing in small claims court depends on the amount of the claim: $30 if the claim is for $1,500 or less, $50 if the claim is for more than $1,500 but less than or equal to $5,000, or $75 if the claim is for more than $5,000. However, if a plaintiff has filed more than 12 small claims actions in California within the previous 12 months, the filing fee for each subsequent case is $100. Multiple filers who prevail in court and are granted court costs may only recover the same amount of court costs that non-multiple filers would receive and not the $100 that was paid. For example, if a multiple filer sued for $1,400 and won a judgment for $1,400, the court will grant that filer court costs (filing fee) of $30 and not the $100 that was paid to the clerks. The filing fee is paid by the plaintiff to the clerk of the small claims court.</p>
            <p>Small claims courts may be able to order a defendant to do something, as long as a claim for money is also part of the lawsuit. If you are suing to get back the lawn mower you loaned to a neighbor, for instance, the court can order the return of the mower, or payment for the mower if it is not returned. Otherwise, small claims courts may order a defendant to do or not to do something only when expressly authorized by statute (i.e, an order preventing an unlawful phone solicitation). The sheriff ’s department usually is the one who enforces those orders. It may or may not need further court orders to enforce a certain order. (For example, the court may order the defendant to return a vehicle to the plaintiff. If the defendant does not comply and parks the vehicle in his or her home garage, the sheriff may require an additional order from the court that would allow them to enter the premises to seize the vehicle). Verify with your local sheriff ’s department or small claims advisors as to the requirements for your particular situation.</p>
            <p>Examples of other disputes that might be resolved in small claims court are:</p>
        <ul className="list-group">
          <li>Your former landlord refuses to return the security deposit you paid.</li>
          <li>Someone dents your car's fender and refuses to pay for its repair.</li>
          <li>Your new TV will not work, and the store refuses to fix it or replace it.</li>
          <li>Your tenant caused damage to the apartment in an amount that exceeded the security deposit. (Note: You can't file an eviction action in small claims court.)</li>
                <li>You were defrauded in the purchase of a car, and desire to cancel the purchase and get back the amount of your down payment from the seller.</li>
          <li>You lent money to a friend, and he or she refuses to re-pay it.</li>
        </ul>
          


                        <br/>

                        <input type="submit" value="Start Small Claims Process" className="btn btn-primary"/>
                        <br/>
                        <br/>

                </form>
                <br/>


            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();
        window.location="/smallclaims";
    }
  
}

