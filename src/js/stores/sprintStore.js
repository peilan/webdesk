let _sprints = [
  {
    id: 1,
    name: 'first sprint',
    tickets: [
      {
        id: 0,
        name: 'sample ticket',
        mark: 2,
        active: true
      }, {
        id: 1,
        name: 'test 111',
        mark: 1,
        active: false
      }, {
        id: 2,
        name: 'react.js',
        mark: 5,
        active: true
      }, {
        id: 3,
        name: 'react-native',
        mark: 8,
        active: false
      }
    ]
  }, {
    id: 2,
    name: 'easy sprint',
    tickets: []
  }, {
    id: 3,
    name: 'short sprint',
    tickets: []
  }
];
let _changeListeners = [];

export default {
  init () {

  },

  getSprints() {
    const array = [];

    for (const id in _sprints) {
      array.push(_sprints[id]);
    }

    return array;
  },

  getSprint(id) {
      const sprint = _sprints.filter(function (sprint) {
        return sprint.id == id;
      })[0];

      sprint.total = 0;

      sprint.tickets.forEach(function (ticket) {
        if (!ticket.active) {
          return;
        }

        sprint.total += ticket.mark;
      });

      return sprint;
  },

  toggleTicket(sprintId, ticketId) {
    let sprint = _sprints.filter(function (sprint) {
      return sprint.id == sprintId;
    })[0];

    if (!sprint) {
      return;
    }

    let ticket = sprint.tickets.filter(function (ticket) {
      return ticket.id == ticketId;
    })[0];

    if (!ticket) {
      return;
    }

    ticket.active = !ticket.active;
    this.notifyChange();
  },

  notifyChange() {
    _changeListeners.forEach(function (listener) {
      listener();
    });
  },

  addChangeListener(listener) {
    _changeListeners.push(listener);
  },

  removeChangeListener(listener) {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l;
    });
  }
};
