import stats from "download-stats";

export default defineEventHandler(async (event) => {
    
    const query = getQuery(event);

   

    const repo = await $fetch(`https://api.npms.io/v2/package/${query.package} `, {
   
  })

  
    async function getStats() {
      try {
        const results = await new Promise((resolve, reject) => {
          stats.get.point("last-day", query.package, function (err, results) {
            if (err) reject(err);
            else resolve(results);
          });
        });
  
        console.log(results);
        return results;
      } catch (error) {
        console.error(error);
        return "error occurred";
      }
    }
  
    const result = await getStats();
    console.log(result);
    // return result;
    return repo;

  });

