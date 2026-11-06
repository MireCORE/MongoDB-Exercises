db.students.aggregate([
  {
    $unwind: "$courses",
  },

  {
    $facet: {
      topPerformers: [
        {
          $match: {
            "courses.score": {
              $gt: 85,
            },
          },
        },
        {
          $group: {
            _id: "$courses.title",
            total: {
              $sum: 1,
            },
          },
        },
      ],

      allCourseAverages: [
        {
          $group: {
            _id: "$courses.title",
            avgScore: {
              $avg: "$courses.score",
            },
          },
        },
      ],
    },
  },

  {
    $project: {
      results: {
        $map: {
          input: "$topPerformers",
          as: "top",
          in: {
            course: "$$top._id",
            total: "$$top.total",

            avgScore: {
              $let: {
                vars: {
                  matchedAverage: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$allCourseAverages",
                          as: "average",
                          cond: {
                            $eq: ["$$average._id", "$$top._id"],
                          },
                        },
                      },
                      0,
                    ],
                  },
                },
                in: "$$matchedAverage.avgScore",
              },
            },
          },
        },
      },
    },
  },

  {
    $unwind: "$results",
  },

  {
    $replaceRoot: {
      newRoot: "$results",
    },
  },

  {
    $sort: {
      total: -1,
      course: 1,
    },
  },

  {
    $project: {
      _id: 0,
      course: 1,
      total: 1,
      avgScore: {
        $round: ["$avgScore", 2],
      },
    },
  },
]);
