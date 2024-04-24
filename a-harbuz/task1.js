db.tracks.aggregate([
    {$sample:{size:3}},
    {$match:{duration_secs:{ $gte: 5*60, $lte: 60*60 }}},
    {$project:{_id:0, title:1}}
])
