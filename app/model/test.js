/**
 * Test Entity (ES6 Class)
 */

class Test {
    constructor(id, server_id, sponsor, server_name, timestamp, distance, ping, download, upload,  share, ip_address) {
        this.id = id;
        this.serverId = server_id;
        this.sponsor = sponsor;
        this.serverName = server_name;
        this.timestamp = timestamp;
        this.distance = distance;
        this.ping = ping;
        this.download = download;
        this.upload = upload;
        this.share = share;
        this.ipAddress = ip_address;
    }
}

module.exports = Test;
