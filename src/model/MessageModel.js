export default class MessageModel {
    constructor(plainMessage) {
        this.id = plainMessage.id;
        this.createdBy = plainMessage.createdBy;
        this.createdAt = plainMessage.createdAt;
        this.title = plainMessage.title;
        this.detailse = plainMessage.detailse;
        this.img = plainMessage.img;
        this.priority = plainMessage.priority;
        this.comments = plainMessage.comments;
        this.status = plainMessage.status;
    }
    
} 