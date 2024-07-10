export type Stamp = {
  id: string;
  pointA: number;
  pointB: number;
  pointC: number;
  pointD: number;
  stamp: string;
  userId: string;
};

export enum IActivity {
  WORKSHOP_X_WONDER = 'workshop-1',
  GIVING_AND_TAKING = 'workshop-2',
  THE_JEWEL = 'workshop-3',
  YOUR_PLEASING_SCENT = 'workshop-4',
  OBJET_D_ART = 'workshop-5',
  LANDMARK_1 = 'landmark-1',
  LANDMARK_2 = 'landmark-2',
  LANDMARK_3 = 'landmark-3',
  LANDMARK_4 = 'landmark-4',
  CLUB_OUTSIDE = 'club-1',
  CLUB_INSIDE = 'club-2',
}
