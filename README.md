# MongoDB $in operator with object array issue
This example demonstrates an incorrect use of the `$in` operator in MongoDB when dealing with an array of objects.
The query attempts to find documents where the `field` matches any object in the array. However, because objects are compared as a whole, the query may produce unexpected results.

The correct approach is to use the `$elemMatch` operator to match elements based on specific fields within the array of objects.

## Bug
The provided code showcases the incorrect usage. The `$in` operator doesn't handle object comparisons as expected, potentially leading to no results when specific fields within the objects should trigger a match.

## Solution
The solution shows the correct method using `$elemMatch` to solve this issue.  This allows for the comparison of individual fields within the objects in the array.