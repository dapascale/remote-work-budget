// import Components
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Currencies from './Currencies';

// Import Packages
import axios from 'axios';
import Swal from 'sweetalert2'
import money from './assets/money.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
const up = <FontAwesomeIcon icon={faAngleUp} />;
const down = <FontAwesomeIcon icon={faAngleDown} />;


class App extends Component {
	constructor() {
		super()
		this.state = {
			countryNames: [],
			currentCurrencyCode: '',
			targetCurrencyCode: '',
			flag: '',
			targetFlag: 'https://restcountries.eu/data/zwe.svg',
			userIncome: 0,
			targetRate: 0,
			isIncomeValid: false,
		}
	}

	componentDidMount() {
		// Create an axios call to retrieve data from each country
		axios({
			url: 'https://restcountries.eu/rest/v2/all',
		}).then((res) => {
			// With results, create a variable to store data
			const countries = res.data

			// Create an empty array
			const newCountries = []
			// Loop through each country's data
			countries.forEach((country) => {
				// For each country, store the country name in a variable
				const name = country.name
				// For each country, store the country flag URL in a variable
				const flag = country.flag
				// For each country, store the country currency in a variable
				const countryCurrencies = country.currencies
				
				countryCurrencies.forEach((currency) => {
					let currencyCode = currency.code

					newCountries.push({ name: name, currencyCode: currencyCode, flag: flag })

					this.setState({
						countryNames: newCountries,
						currentCurrencyCode: currencyCode,
						flag: flag,
					})
				})
			})
		})
	}

	handleIncomeInputChange = (event) => {
		const incomeInput = event.target.value

    // if income input is not a number, set state to true,
    // which displays error message
		if (isNaN(incomeInput)) {
			this.setState({
				isIncomeValid: true,
			})
			// if income input is an empty string, still display error message
		} else if (incomeInput === '') {
			this.setState({
				isIncomeValid: true,
				userIncome: incomeInput,
			})
			// otherwise, if user input is a number, remove error message
		} else {
			this.setState({
				userIncome: incomeInput,
				isIncomeValid: false,
			})
		}
	}


	handleCurrentChange = (event) => {
		// look at the value attribute on the dropdown option
		const userSelection = event.target.value
		// Find Flag
		const foundFlag = this.state.countryNames.filter(country => {
			if (country.currencyCode === userSelection)
			return country.flag
		})[0]['flag'] 
		// send it to state
		this.setState({
			currentCurrencyCode: userSelection,
			flag: foundFlag,
		}, () => {
			this.getCurrencies()
		})
	}


	handleTargetChange = (event) => {
		// look at the value attribute on the dropdown option
		const targetSelection = event.target.value
		// find Target Flag
		const foundTargetFlag = this.state.countryNames.filter(country => {
			if (country.currencyCode === targetSelection)
			return country.flag
		})[0]['flag']
		// send it to state
		this.setState({
			targetCurrencyCode: targetSelection,
			targetFlag: foundTargetFlag,
		}, () => {
    	this.getCurrencies()
    	})
	}


	getCurrencies = () => {
		// run this axios call
		axios({
			// using custom endpoint built with pieces of state
			url: `https://api.exchangeratesapi.io/latest?base=${this.state.currentCurrencyCode}&symbols=${this.state.targetCurrencyCode}`,
		})
    .then((res) => {
    	// this gives us the target currency CODE
    	let conversionCode = this.state.targetCurrencyCode
      	// this is the rate of conversion
    	let convertedRate = res.data.rates[conversionCode]

    	this.setState({
        targetRate: convertedRate,
    	})
    })
    .catch((error) => {
      Swal.fire({
				text: `Sorry, looks we don't have one of your currencies in our database yet, but we're working on it.`,
				showClass: {
					popup: 'animate__animated animate__fadeInDown',
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp',
					confirmButtonColor: '#81003c',
				},
			})
    })
	}


	render() {
		return (
			<div className="App">
				<Header />
				<div className="wrapper">
					<div className="mainContainer">
						<div className="incomeInputArea">
							<h3>Let's get started!</h3>
							<div className="labelLogoIncome">
								<label htmlFor="incomeAmount" className="srOnly">Income Amount:</label>
								<input
									type="number"
									id="incomeAmount"
									value={this.state.userIncome}
									onChange={this.handleIncomeInputChange}
									placeholder="Monthly Income"
								/>
								<img src={money} alt="little logo for cash" />
							</div>
							{this.state.isIncomeValid ? (
								<p className="errorMessage side">Please enter a number value</p>
							) : <p className="errorMessage side"> Your monthly income<span className="point">{up}</span> </p>}
							<div className="incomeDrop">
								<select className="incomeDropdown" onChange={this.handleCurrentChange}>
									{this.state.countryNames.map((country, index) => {

										return (
											<option value={country.currencyCode} key={index}>
												{`${country.name}  |  ${country.currencyCode}`}
											</option>
										)
									})}
								</select>
								<div className="currentCodeImg">
									<img src={`${this.state.flag}`} alt={`${this.state.flag}`} />
								</div>
								<div className="under">
									<p className="errorMessage">Income currency<span className="point">{up}</span></p>
								</div>
							</div>

							<div className="targetDropdown">
								<select className="budgetDropdown" onChange={this.handleTargetChange}>
									{this.state.countryNames.map((country, index) => {
										return (
											<option value={country.currencyCode} key={index}>
												{`${country.name} | ${country.currencyCode}`}
											</option>
										)
									})}
								</select>
								<div className="currentCodeImg">
									<img src={`${this.state.targetFlag}`} alt={`${this.state.targetFlag}`} />
								</div>
								<div className="under">
									<p className="errorMessage">Target currency<span className="point">{up}</span></p>
								</div>
							</div>
						</div>
						

						<section className="target">
							<Currencies
								currentCurrencyCode={this.state.currentCurrencyCode}
								parentCallback={this.callbackFunction}
								targetRate={this.state.targetRate}
								userIncome={this.state.userIncome}
								targetCurrencyCode={this.state.targetCurrencyCode}
							/>
						</section>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
