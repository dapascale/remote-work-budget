import React, { Component } from 'react';

// Import Assets
import entertainment from './assets/001-popcorn.png';
import food from './assets/002-harvest.png';
import transport from './assets/003-taxi.png';
import bills from './assets/004-credit-card.png';
import housing from './assets/006-house.png';

// Import Packages
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSadTear } from '@fortawesome/free-solid-svg-icons'
const plane = <FontAwesomeIcon icon={faPaperPlane} />
const face = <FontAwesomeIcon icon={faSadTear} />

class Currencies extends Component {
  constructor() {
    super();
    this.state = {
      housing: 0,
      bills: 0,
      entertainment: 0,
      food: 0,
      transport: 0,
      convertedIncome: 0,
      totalExpenses: 0,
      surplusShortage: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  calculateIncome = () => {
    // result is the userIncome in the new currency.
    let result = this.props.userIncome * this.props.targetRate;

    this.setState({
      convertedIncome: result.toFixed(2)
    }, () => {
      // call the surplus shortage function only when the convertedIncome is updated
      this.calculateSurplusShortage()
    })
  }

  calculateSurplusShortage = () => {
    // get the annual expenses in the new currency
    let newSurplusShortage = this.state.convertedIncome - this.state.totalExpenses
    this.setState({
      surplusShortage: newSurplusShortage.toFixed(2)
    })
  }



  calculateTotalExpenses = () => {
    // array to store all the string values from the state
    let expensesArray = [
      this.state.food,
      this.state.housing,
      this.state.bills,
      this.state.transport,
      this.state.entertainment
    ]
    // converting to array of numbers to use later in the calculation
    let newExpensesArray = expensesArray.map(number => {
      return parseFloat(number)
    })


    // building the calculation
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // takes the number array and uses the reducer to calculate the total sum of expenses
    let newTotal = newExpensesArray.reduce(reducer);
    if (this.props.targetRate) {
      this.setState(
        {
          totalExpenses: newTotal.toFixed(2),
        },
        () => {
          this.calculateIncome()
        }
      )
    } else {
       Swal.fire({
					text: `Please select target currency.`,
					showClass: {
						popup: 'animate__animated animate__fadeInDown',
					},
					hideClass: {
						popup: 'animate__animated animate__fadeOutUp',
					},
				})
    }
  }


render() {
    return (
		<div>
			<div className="expenses">
				<h3>Monthly Budget</h3>
				<div className="expense">
					<div className="labelLogo">
						<img src={housing} alt="little icon representing housing" />
						<label htmlFor="housing">Housing</label>
					</div>
					<input
						name="housing"
						type="text"
						id="housing"
						onChange={this.handleChange}
						value={this.state.expensesArray}
					/>
				</div>
				<div className="expense">
					<div className="labelLogo">
						<img src={bills} alt="little icon representing bills" />
						<label htmlFor="bills">Bills</label>
					</div>
					<input
						name="bills"
						type="text"
						id="bills"
						onChange={this.handleChange}
						value={this.state.expensesArray}
					/>
				</div>
				<div className="expense">
					<div className="labelLogo">
						<img src={food} alt="little icon representing food" />
						<label htmlFor="food">Food</label>
					</div>
					<input
						name="food"
						type="text"
						id="food"
						onChange={this.handleChange}
						value={this.state.expensesArray}
					/>
				</div>
				<div className="expense">
					<div className="labelLogo">
						<img src={transport} alt="little icon representing transport" />
						<label htmlFor="transport">Transport</label>
					</div>
					<input
						name="transport"
						type="text"
						id="transport"
						onChange={this.handleChange}
						value={this.state.expensesArray}
					/>
				</div>
				<div className="expense">
					<div className="labelLogo">
						<img src={entertainment} alt="little icon representing entertainment" />
						<label htmlFor="entertainment">Entertainment</label>
					</div>
					<input
						name="entertainment"
						type="text"
						id="entertainment"
						onChange={this.handleChange}
						value={this.state.expensesArray}
					/>
				</div>
				<div className="totalExpenses">
					<button
						className="calculateTotal"
						onClick={this.calculateTotalExpenses}
					>
						Calculate Total
					</button>
				</div>
			</div>
		
			<div className="results">
				<div className="resultsFlex">
					{/* use conditional statement to display */}
					<p>
						Monthly Expenses<br />
						<span className="resultStyle">
							${this.state.totalExpenses}
						</span>
					</p>
					<p>
						Converted Income<br />
						<span className="resultStyle">
							${new Intl.NumberFormat().format(this.state.convertedIncome)}
						</span>
						&nbsp;
						{this.props.targetCurrencyCode}
					</p>

					{this.state.surplusShortage > -1 ? (
						<p>
							Awesome! <span className="plane">{plane}</span> <br />
							<span className="resultStyle">
								${new Intl.NumberFormat().format(this.state.surplusShortage)}
							</span>
							&nbsp;
							{this.props.targetCurrencyCode}
							<p className="small">You've got extra cash to save for a rainy day.</p>
						</p>
					) : (
						<p>
							Uh-oh! <span className="plane">{face}</span> <br />
							<span className="resultStyle">
								${new Intl.NumberFormat().format(this.state.surplusShortage)}
							</span>
							&nbsp;
							{this.props.targetCurrencyCode}
							<p className="small">Looks like you're spending a little too much.</p>
						</p>
					)}
				</div>
			</div>
		</div>
	)
}}
export default Currencies;