```javascript
// Correct use of $elemMatch operator
db.collection.find({ field: { $elemMatch: { a: { $in: [1, 2] } } } });
```