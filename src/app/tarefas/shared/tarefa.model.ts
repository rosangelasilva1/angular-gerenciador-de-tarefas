export class Tarefa {

	constructor(
		private id?: number,
		public nome?: string,
		private concluida?: boolean) {}

	public getId(): number {
		return this.id;
	}

	public getNome(): string {
		return this.nome;
	}

	public setNome(nome: string): void {
		this.nome = nome;
	}

	public estaConcluida(): boolean {
		return this.concluida;
	}

	public setConcluida(concluida: boolean): void {
		this.concluida = concluida;
	}
}