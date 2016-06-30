/**
 * Created by Vale on 29/06/16.
 */

import Milestone from './Milestone'

export default class Usecase {

    constructor({title, body, milestones}) {
        this.title = title;
        this.body = body;
        this.milestones = milestones.map(
            item => new Milestone(item)
        );
    }

}