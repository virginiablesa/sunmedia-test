/** Class representing an event manager. */
export default class EventManager{
    /**
     * Create an event manager with params.
     * @param {Object} events - Events created
     * @param {Object} eventsData - Data Events.
     */
    constructor(events, eventsData) {
      this.events = events;
      this.eventsData = eventsData;
    }

    /**
     * Get event to call depending on second marked by JSON
     * Run event selected
     * @param {number} second marked representation
     */
    getAndExecutedCurrentEvent(time) {
      let _this = this;
      let eventsMethodSelected = this.eventsData.filter(event => event.second === time);
       if(eventsMethodSelected.length !== 0) {
          eventsMethodSelected.forEach(function(val) {
            let eventSelected = _this.events.find(event => event.method === val.type);
            eventSelected.action(time, eventsMethodSelected);
          })
      }
    }

    /**
     * Execute selected event each second
     */
    run() {
      let time = 0;
      let _this = this;
      setInterval(function(){
        _this.getAndExecutedCurrentEvent(time);
        time++;
      }, 1000);
    }
};
