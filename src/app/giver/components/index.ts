import GiversComponents from './givers';
import GiverGroupsComponents from './giver-groups';
import { GiverComponent } from './giver/giver.component';

export default [
  GiverComponent,
  ...GiversComponents,
  ...GiverGroupsComponents,
];
