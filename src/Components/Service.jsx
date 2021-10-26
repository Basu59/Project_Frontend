import axios from 'axios';
const URL_ROU = "http://localhost:8080/bus/addrou";
const URL_SCH = "http://localhost:8080/bus/addsch";
const URL_STOP = "http://localhost:8080/bus/addstop";
const URL_BUS = "http://localhost:8080/bus/addbus";
const BASE_URL="http://localhost:8080/bus/addbusd";


class Service {



    // for Bus
    getRoute() {
        return axios.get(URL_ROU);
    }

    createRoute(route) {
        return axios.post(URL_ROU, route);
    }
    getRouteById(routeId) {
        return axios.get(URL_ROU + '/' + routeId);
    }

    updateRoute(route, routeId) {
        return axios.put(URL_ROU + '/' + routeId, route);

    }
    deleteRoute(routeId) {
        return axios.delete(URL_ROU + '/' + routeId);
    }

// shedule
    getSchedule() {
        return axios.get(URL_SCH);
    }
    createSchedule(schedule) {
        return axios.post(URL_SCH, schedule);
    }
    getScheduleById(scheduleId) {
        return axios.get(URL_SCH + '/' + scheduleId);
    }

    updateSchedule(schedule, scheduleId) {
        return axios.put(URL_SCH + '/' + scheduleId, schedule);
        
    }
    deleteSchedule(scheduleId) {
        return axios.delete(URL_SCH + '/' + scheduleId);
    }
    // bus
    getBus(){
        return axios.get(BASE_URL);
    }
   
    createBus(bus){
        return axios.post(BASE_URL,bus);
    }
    getBusById(busId){
        return axios.get(BASE_URL+ '/'+ busId);
     }

    updateBus(bus,busId){
         return axios.put(BASE_URL+ '/'+ busId,bus); 

         }
    deleteBus(busId){
             return axios.delete(BASE_URL+'/'+busId);
         }


    // for stops
    getStop() {
        return axios.get(URL_STOP);
    }

    createStop(stop) {
        return axios.post(URL_STOP, stop);
    }

    getStopById(StopsId) {
        return axios.get(URL_STOP + '/' + StopsId);
    }

    updateStop(stop, StopsId) {
        return axios.put(URL_STOP + '/' + StopsId, stop);
    }

    deleteStop(StopsId) {
        return axios.delete(URL_STOP + '/' + StopsId);
    }

}
export default new Service();