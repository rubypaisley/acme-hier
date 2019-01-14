const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

function showManagementStructure(userArr){
    let bossID;
    for (let i = 0; i < userArr.length; i++){
        let currentUser = userArr[i];
        if (!currentUser.managerId){
            console.log(currentUser.name);
            bossID = currentUser.id;
        } else if (currentUser.managerId === bossID){
            console.log(' - ' + currentUser.name);
        } else (
            console.log('   - ' + currentUser.name)
        )
    }
}

showManagementStructure(users);
/*
moe
 - larry
	 - curly
 - shep
	 - groucho
*/