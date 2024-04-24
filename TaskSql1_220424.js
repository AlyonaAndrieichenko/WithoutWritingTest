//Вывести названия трех произвольных треков с продолжительностью от 5 до 60 мин (вкл.)

db.tracks.aggregate([
    { $match: { duration: { $gte: 5, $lte: 60 } } },
    { $sample: { size: 3 } },
    { $project: { title: 1, _id: 0 } }
]);