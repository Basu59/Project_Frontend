import React, { Component } from 'react'
import BusSt from './IMG/Location.gif';
import Bush from './IMG/Schedule.gif';
import stop from './IMG/BusStoplo.gif';
import pass from './IMG/Person.gif';
export default class All extends Component {
    render() {
        return (<>

<div className="text-center" >
<h3>BUS STOP LOCATION MAPPING</h3>

</div>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img class="d-block d-flex justify-content-center" src={BusSt} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block d-flex justify-content-center " src={Bush} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block d-flex justify-content-center " src={pass} alt="Third slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block d-flex justify-content-center " src={stop} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</>
        )
    }
}
