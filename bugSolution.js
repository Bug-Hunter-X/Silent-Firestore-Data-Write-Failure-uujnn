The issue was caused by an improper handling of the Promise returned by the `set()` method.  The original code lacked a `.then()` or `.catch()` block to properly handle the asynchronous nature of the operation.  The solution involves explicitly awaiting the promise to ensure the write operation completes before continuing.  Here's the corrected code:

```javascript
async function writeData(data) {
  try {
    await db.collection('myCollection').doc('myDoc').set(data);
    console.log('Data written successfully!');
  } catch (error) {
    console.error('Error writing data:', error);
  }
}
```
This ensures that the code waits for the write to complete before proceeding.  Adding proper error handling also allows for debugging of potential issues that might occur during the write operation.