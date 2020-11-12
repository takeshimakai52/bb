import React from 'react';
import axios from "axios";
import Select from 'react-select'
import Dropdown from 'react-mui-multiselect-dropdown'

const options = [
    { value: 'shikotan', label: '色丹' },
    { value: 'otaru', label: '小樽' },
    { value: 'aomori', label: '青森' },
    { value: 'tokyo', label: '東京' },
    { value: 'osaka', label: '大阪' },
    { value: 'hiroshima', label: '広島' },
    { value: 'nagasaki', label: '長崎' },
  ]

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';

class Otenki extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey : '9818cad3ab2f1747d850c0f9528d83c7',
            requestCity: '',         //  ex. 'Tokyo,jp'
            lang:'ja',
            city: '',
            response : []
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this);
    }
    handleGetWeather(){
        axios
            .get(API_ENDPOINT, {
                params: {
                    q: this.state.requestCity,
                    APPID: this.state.apiKey,
                    lang:this.state.lang
                } })
            .then(res => {
                this.setState({
                    response: res.data.list,
                    city: res.data.city.name
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleInput({ target: { value } }) {
        this.setState({
            requestCity: value
        });
    }
    render() {
        // console.log(this.state.response);

        return (
            <div>
                <h1>Weather forecast</h1>
                <input type="text" value={this.state.requestCity} onChange={this.handleInput} />
                <button onClick={this.handleGetWeather}>Search</button>
                <p> Location: {this.state.city} </p>
                {Object.keys(this.state.response).map(key => (
                    <li key={key}>
                        {this.state.response[key].dt_txt}
                        ,<img src={'http://openweathermap.org/img/w/'+this.state.response[key].weather[0].icon+'.png'} />
                        {this.state.response[key].weather[0].main}
                    </li>
                ))}
            </div>
        );
    }
}
export default Otenki