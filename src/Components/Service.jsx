import axios from 'axios';
import authHeader from "../services/auth-header";
const URL_ROU = "http://localhost:8080/bus/addrou";
const URL_SCH = "http://localhost:8080/bus/addsch";
const URL_STOP = "http://localhost:8080/bus/addstop";
const URL_VECH = "http://localhost:8080/bus/addvech";
const BASE_URL="http://localhost:8080/bus/addbusd";
const BASE_URL1="http://localhost:8080/bus/addpas";




class Service {


// for Vechile Registration

getVech() {
    return axios.get(URL_VECH,{ headers: authHeader() });
}

createVech(vech) {
    return axios.post(URL_VECH, vech,{ headers: authHeader() });
}

getVechById(VechId) {
    return axios.get(URL_VECH + '/' + VechId,{ headers: authHeader() });
}

updateVech(vech, VechId) {
    return axios.put(URL_VECH + '/' + VechId, vech,{ headers: authHeader() });
}

deleteVech(VechId) {
    return axios.delete(URL_VECH + '/' + VechId,{ headers: authHeader() });
}

    // for Bus
    getRoute() {
        return axios.get(URL_ROU, { headers: authHeader() });
    }

    createRoute(route) {
        return axios.post(URL_ROU, route,{ headers: authHeader() });
    }
    getRouteById(routeId) {
        return axios.get(URL_ROU + '/' + routeId,{ headers: authHeader() });
    }

    updateRoute(route, routeId) {
        return axios.put(URL_ROU + '/' + routeId, route,{ headers: authHeader() });

    }
    deleteRoute(routeId) {
        return axios.delete(URL_ROU + '/' + routeId,{ headers: authHeader() });
    }

// shedule
    getSchedule() {
        return axios.get(URL_SCH,{ headers: authHeader() });
    }
    createSchedule(schedule) {
        return axios.post(URL_SCH, schedule,{ headers: authHeader() });
    }
    getScheduleById(scheduleId) {
        return axios.get(URL_SCH + '/' + scheduleId,{ headers: authHeader() });
    }

    updateSchedule(schedule, scheduleId) {
        return axios.put(URL_SCH + '/' + scheduleId, schedule,{ headers: authHeader() });
        
    }
    deleteSchedule(scheduleId) {
        return axios.delete(URL_SCH + '/' + scheduleId,{ headers: authHeader() });
    }
    // bus
    getBus(){
        return axios.get(BASE_URL,{ headers: authHeader() });
    }
   
    createBus(bus){
        return axios.post(BASE_URL,bus,{ headers: authHeader() });
    }
    getBusById(busId){
        return axios.get(BASE_URL+ '/'+ busId,{ headers: authHeader() });
     }

    updateBus(bus,busId){
         return axios.put(BASE_URL+ '/'+ busId,bus,{ headers: authHeader() }); 

         }
    deleteBus(busId){
             return axios.delete(BASE_URL+'/'+busId,{ headers: authHeader() });
         }


    // for stops
    getStop() {
        return axios.get(URL_STOP,{ headers: authHeader() });
    }

    createStop(stop) {
        return axios.post(URL_STOP, stop,{ headers: authHeader() });
    }

    getStopById(StopsId) {
        return axios.get(URL_STOP + '/' + StopsId,{ headers: authHeader() });
    }

    updateStop(stop, StopsId) {
        return axios.put(URL_STOP + '/' + StopsId, stop,{ headers: authHeader() });
    }

    deleteStop(StopsId) {
        return axios.delete(URL_STOP + '/' + StopsId,{ headers: authHeader() });
    }

      //passanger
      getPassenger(){
        return axios.get(BASE_URL1,{ headers: authHeader() });
    }
createPassenger(passenger){
        return axios.post(BASE_URL1,passenger,{ headers: authHeader() });
    }
getPassengerById(passengerId){
        return axios.get(BASE_URL1+ '/'+ passengerId,{ headers: authHeader() });
     }

updatePassenger(passenger,passengerId){
         return axios.put(BASE_URL1+ '/'+ passengerId,passenger,{ headers: authHeader() }); 

         }
deletePassenger(passengerId){
             return axios.delete(BASE_URL1+'/'+passengerId,{ headers: authHeader() });
         }

       

}
export default new Service();