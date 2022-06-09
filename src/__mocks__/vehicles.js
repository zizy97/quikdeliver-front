import { v4 as uuid } from 'uuid';

export const vehicles = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods',
    media: '/static/images/vehicles/veh-1.jpg',
    title: 'Car',
    doneJobs: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    media: '/static/images/vehicles/veh-2.jpg',
    title: 'Bus',
    doneJobs: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    media: '/static/images/vehicles/veh-3.jpg',
    title: 'Lorry',
    doneJobs: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    media: '/static/images/vehicles/veh-4.jpg',
    title: 'Truck',
    doneJobs: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    media: '/static/images/vehicles/veh-5.jpg',
    title: 'Bike',
    doneJobs: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    media: '/static/images/vehicles/veh-6.jpg',
    title: 'Prime Move',
    doneJobs: '835'
  }
];
