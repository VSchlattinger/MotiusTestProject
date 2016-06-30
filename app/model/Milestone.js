/**
 * Created by Vale on 29/06/16.
 */

export default class Milestone {

    constructor({id, name, start_date, end_date}) {
        this.id = id;
        this.content = name;
        this.start = start_date;
        this.end = end_date;
    }

}