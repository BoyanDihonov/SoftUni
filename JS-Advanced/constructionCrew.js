function constructionCrew(worker) {

    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * worker.experience * 0.1
        worker.dizziness = !worker.dizziness

    }
    return worker
}
