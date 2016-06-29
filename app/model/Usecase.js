/**
 * Created by Vale on 29/06/16.
 */

import Milestone from './Milestone'

export default class Usecase {

    constructor({title, body, milestones}) {
        this.title = title;
        this.body = body;
        this.milestones = [];
        milestones.forEach(
            milestone => this.milestones.push(new Milestone(milestone))
        );
    }

}