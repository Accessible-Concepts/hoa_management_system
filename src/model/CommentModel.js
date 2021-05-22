export default class CommentModel {
   
    constructor(plainComment) {
        this.id = plainComment.id;
        this.messagesid = plainComment.messagesid;   
        this.createdBy = plainComment.createdBy;
        this.tenantId = plainComment.tenantId;
        this.createdAt = plainComment.createdAt;
        this.detailse = plainComment.detailse;
    }
} 