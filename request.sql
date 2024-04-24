db.tracks.aggregate([
    { $match: { duration_secs: { $lte: 100 * 60 } } },
    {  $sample: { size: 3 }},
    { $project: { title: 1, _id: 0 } }
])