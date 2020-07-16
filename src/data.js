const taskData = {
  tasks: {
    'task-1': { 
      id: 'task-1',
      title: 'Improve accuracy of the voice-to-text model',
      asignee: "person-1",
      start_date: '2020-01-26T13:51:50.417-07:00',
      end_date: '2020-01-26T13:51:50.417-07:00',
      tags: 'A', 
    },
    'task-2': { 
      id: 'task-2',
      title: 'Create API to load user info from database',
      asignee: "person-2",
      start_date: '2020-01-26T13:51:50.417-07:00',
      end_date: '2020-01-26T13:51:50.417-07:00',
      tags: 'B', 
    },
    'task-3': { 
      id: 'task-3',
      title: 'Two-factor authentication to make private',
      asignee: "person-3",
      start_date: '2020-01-26T13:51:50.417-07:00',
      end_date: '2020-01-26T13:51:50.417-07:00',
      tags: 'C', 
    },
    'task-4': { 
      id: 'task-4',
      title: 'Improve accuracy of the voice to text model',
      asignee: "person-4",
      start_date: '2020-01-26T13:51:50.417-07:00',
      end_date: '2020-01-26T13:51:50.417-07:00',
      tags: 'A', 
    },
    'task-5': { 
      id: 'task-5',
      title: 'Two-factor authentication to make private',
      asignee: "person-5",
      start_date: '2020-01-26T13:51:50.417-07:00',
      end_date: '2020-01-26T13:51:50.417-07:00',
      tags: 'C', 
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Backlog',
      taskIds: ['task-1','task-2','task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'To Do',
      taskIds: ['task-4','task-5']
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: []
    }    
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};

const teamsData = {
  teams : ['team1','team2','team3'],
  team: {
    "team1": {name: "Researchers"} ,
    "team2": {name: "FE/BE Team"},
    "team3": {name: "PM Team"}
  }
}

export {
  taskData,
  teamsData
} ;