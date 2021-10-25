import axios from 'axios';
const URL_ROU = "http://localhost:8080/bus/addrou";
const URL_SCH = "http://localhost:8080/bus/addsch";
const URL_STOP = "http://localhost:8080/bus/addstop";
const URL_BUS = "http://localhost:8080/bus/addbus";

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

    // for stops
    getStop() {
        return axios.get(URL_STOP);
    }
    createStop(stop) {
        return axios.post(URL_STOP, stop);
    }
    getStopById(stopId) {
        return axios.get(URL_STOP + '/' + stopId);
    }

    updateStop(stop, stopId) {
        return axios.put(URL_STOP + '/' + stopId, stop);

    }
    deleteStop(stopId) {
        return axios.delete(URL_STOP + '/' + stopId);
    }
    // BUS

    getBus() {
        return axios.get(URL_BUS);
    }

    createBus(Bus) {
        return axios.post(URL_BUS, Bus);
    }
    getBusById(BusId) {
        return axios.get(URL_BUS + '/' + BusId);
    }

    updateBus(Bus, BusId) {
        return axios.put(URL_BUS + '/' + BusId, Bus);

    }
    deleteBus(BusId) {
        return axios.delete(URL_BUS + '/' + BusId);
    }
}
export default new Service();