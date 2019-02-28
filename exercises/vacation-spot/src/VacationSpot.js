import React from 'react';
import Cards from './Cards';


const VacationSpot = () => {
    const styles= {
        textAlign: "center",
    }

    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]

    const mappedVacationSpots = vacationSpots.map((vacationSpot, i) =>{
        let backgroundColor;
        if (vacationSpot.timeToGo === "Spring"){
            backgroundColor = "pink";
        } else if (vacationSpot.timeToGo === "Winter"){
            backgroundColor = "blue";
        } else if (vacationSpot.timeToGo === "Fall"){
            backgroundColor = "orange"; 
        } else if (vacationSpot.timeToGo === "Summer"){
            backgroundColor = "red";
        }

        return (
                <Cards key={i+vacationSpot.place} place={vacationSpot.place} price={vacationSpot.price} timeToGo={vacationSpot.timeToGo} backgroundColor={backgroundColor}/>
           
        )
    })

    return (
        <div>
            <h1 style={styles}>Vacation Spots</h1>
            {mappedVacationSpots}
        </div>
    )

}

export default VacationSpot;