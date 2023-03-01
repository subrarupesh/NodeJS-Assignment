findIndex=(n) => 
{
    if (n <= 1)
        return n;
   
    let a = 0, b = 1, c = 1;
    let res = 1;
    while (c < n)
    {
        c = a + b;
        res++;
        a = b;
        b = c;
    }
    return res;
}

migrateRings=(n, from_rod,  to_rod,  aux_rod, disks) =>
{
        if(n < 0) {
            console.log("Ring Diameter canot be negative");
            return ;
        }
        if (n == 0)
        {
            return [];
        }
        migrateRings(n - 1, from_rod, aux_rod, to_rod, disks);
        disks.push(n+" : "+from_rod+" to "+to_rod);
        migrateRings(n - 1, aux_rod, to_rod, from_rod, disks);
        return disks;
}
 
 // Assignment 3:
 let disks = [];     
console.log(migrateRings(1, 'A', 'B', 'C', disks));
// Assignment 1:
console.log(findIndex(21));
