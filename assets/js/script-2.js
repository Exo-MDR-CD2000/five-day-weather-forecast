// example of a js try...catch block

try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    // handle the response data
  } catch (error) {
    // handle the error
  }



  //using throw new error allows you to catch the error in the catch block
  //seems to be a better approach instead of using if else statements
  //like for example, checking for any errors such as 404, 500, etc.