db.tracks.aggregate([
    {$match: {duration_secs: {$gte: 5 * 60, $lte: 60 * 60}}},
    {$sample: {size: 3}},
    {$project: {_id: 0, title: 1}}
])