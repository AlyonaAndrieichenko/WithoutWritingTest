//Задача. Вывести названия трех произвольных треков с продолжительностью от 5 до 60 мин (вкл.)
db.tracks.aggregate([
    { $match: { duration_secs: { $gte: 60 * 5, $lte: 60 * 60 } } },
    { $sample: { size: 3 } },
    { $project: { _id: 0, name: 1 } }
])