import * as crypto from "crypto"

export default class Hash{
    static salt = "E1F53135E559C253";

    /**
     *
     * @param {string} password
     * @returns {string}
     */
    static hashPassword(password:string){
        let hash = crypto.createHmac("sha512", this.salt);
        hash.update(password);
        return hash.digest("hex");

    }

}

