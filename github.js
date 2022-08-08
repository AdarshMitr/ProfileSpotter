class Github{
    constructor(){
        this.client_id='34fd1ca1fda382fb322e';
        this.client_sectet='de9d4393040f3418a04405d40330106ec68f8ccc';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile=await profileResponse.json();
        const repos=await repoResponse.json();
        return {
            profile,
            repos
        }
    }
};