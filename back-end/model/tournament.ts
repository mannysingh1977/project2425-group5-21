export class Tournament {
    private id?: number;
    private name: string;
    private startDate: Date;
    private endDate: Date;
    private difficulity: string;

    constructor(tournament: {
        id?: number;
        name: string;
        startDate: Date;
        endDate: Date;
        difficulity: string;
    }) {
        this.validate(tournament);

        this.id = tournament.id;
        this.name = tournament.name;
        this.startDate = tournament.startDate;
        this.endDate = tournament.endDate;
        this.difficulity = tournament.difficulity;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getDifficulity(): string {
        return this.difficulity;
    }

    setId(id: number | undefined): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setStartDate(startDate: Date): void {
        this.startDate = startDate;
    }

    setEndDate(endDate: Date): void {
        this.endDate = endDate;
    }

    setDifficulity(difficulity: string): void {
        this.difficulity = difficulity;
    }

    validate(tournament: { name: string; startDate: Date; endDate: Date; difficulity: string }) {
        if (!tournament.name?.trim()) {
            throw new Error('Name is required');
        }
        if (!tournament.startDate) {
            throw new Error('Start date is required');
        }
        if (!tournament.endDate) {
            throw new Error('End date is required');
        }
        if (!tournament.difficulity?.trim()) {
            throw new Error('Difficulity is required');
        }
    }

    equals(tournament: Tournament): boolean {
        return (
            this.name === tournament.getName() &&
            this.startDate === tournament.getStartDate() &&
            this.endDate === tournament.getEndDate() &&
            this.difficulity === tournament.getDifficulity()
        );
    }
}
