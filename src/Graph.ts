export class Graph<T>{
    private readonly from = new Map<string,T[]>();
    private readonly to = new Map<string, T[]>();
    public hasNode(element: T): boolean{
        return this.from.has("" + element);
    }
    public addNode(element: T): void{
        if(this.hasNode(element))
            return;
        this.from.set("" + element, []);
        this.to.set("" + element, []);
    }
    public addEdge(begin: T, end: T): void{
        this.addNode(begin);
        this.addNode(end);
        // addNode will initialize the arrays if they don't exist
        this.from.get("" + begin)!.push(end);
        this.to.get("" + end)!.push(begin);
    }

    public getFrom(element: T): T[] | undefined{
        return this.from.get("" + element);
    }

    public toString(): string{
        return JSON.stringify(this.from);
    }
}
