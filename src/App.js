import react from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends react.Component {


  constructor(props) {
    super(props)
    this.state= {
      locationName : '',
      allData : {},
      showData : false,

    }
  }

  viewLocation = async (event) => {

    event.preventDefault();
    await this.setState({locationName:event.target.Cityname.value});
    let url = `https://eu1.locationiq.com/v1/search?key=pk.a598241e18734046c6c6c5e483f57507&q=${this.state.locationName}&format=json`;
    let response =await axios.get(url);
    console.log(response);
    this.setState({allData:response.data[0],showData:true})

  }


  render() {
    return (
      <div>
        <h1>map view</h1>

        <Form onSubmit={this.viewLocation}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name="Cityname" placeholder="Enter Place" />
          </Form.Group>
          <Button variant="primary" type="submit">
              show
          </Button>
        </Form>
      <br>
      </br>
      {this.state.showData &&
      <>
      <p> Place Name : {this.state.allData.display_name}</p>
      <p> Latitude : {this.state.allData.lat}</p>
      <p> Longitude :{this.state.allData.lon}</p>
      <br>
    </br>
    <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.a598241e18734046c6c6c5e483f57507&center=${this.state.allData.lat},${this.state.allData.lon}&zoom=10`} alt='here we are'/>
    </>
      
      }

      </div>
    )
  }
}

export default App;


