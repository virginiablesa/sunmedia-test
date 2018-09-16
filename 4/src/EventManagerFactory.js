import EventManager from './EventManager';
import Event from './Event';

/** Class representing an event manager factory. */
export default class EventManagerFactory{

    /**
     * Prepare events and action to execute depending on the received events and its types
     * @param {Object} events - JSON Events
     * @param {Array} Types - Events Type.
     * @return {Function}
     */
    static create(events, types) {
      debugger;
      let selectedEventsData = (events).filter(event => types.indexOf(event.type) !== -1);
      let selectedEvents = [];
      let func = (time, data) => console.log(`At second ${time}: ${JSON.stringify(data)}`);
      selectedEventsData.forEach(function (event) {
        selectedEvents.push(new Event(event, func))
      });
      return new EventManager(selectedEvents, selectedEventsData);
    }
};
