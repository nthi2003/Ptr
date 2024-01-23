export const path = {
    HOME: '/*',
    HOME__PAGE: ':page',
    LOGIN: 'login',
    CHO_THUE_CAN_HO: 'cho-thue-can-ho',
    CHO_THUE_MAT_BANG: 'cho-thue-mat-bang',
    NHA_CHO_THUE: 'nha-cho-thue',
    CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
    DETAL_POST__TITLE__POSTID: 'chi-tiet/:title/:postId',
    SEARCH: 'tim-kiem',
    SYSTEM: '/he-thong/*',
    CREATE_POST: 'tao-moi-bai-dang'
    
}
export const formatVietnameseToString = (keyword) => {
    return keyword
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-");
}
