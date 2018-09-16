/** Class representing an event. */
export default class Event{
    /**
     * Create an event with params.
     * @param {Object} event - Data event
     * @param {Function} action - action to run.
     */
    constructor(event, action) {
        this.event = event;
        this.method = event.type;
        this.action = action;
    }

    /**
     * return action defined on the event.
     * @param {...object} params - Params that action needs
     * @return {Function}
     */
    action(...params) {
      return this.action(...params)
    }
  };
