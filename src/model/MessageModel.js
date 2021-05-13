export default class MessageModel {
    constructor(plainMessage) {
        this.createdBy = plainMessage.createdBy;
        this.createdAt = plainMessage.createdAt;
        this.title = plainMessage.title;
        this.detailse = plainMessage.detailse;
        this.image = plainMessage.image;
        this.priority = plainMessage.priority;
        this.comments = plainMessage.comments;
        this.status = plainMessage.status;
    }
    
} 