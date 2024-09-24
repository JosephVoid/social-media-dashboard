import { SocialCard } from "@/types/types";
import mock from "./mock.json";

class MockAPI {
  socials: SocialCard[] = [];

  constructor() {
    this.socials = mock.socials as SocialCard[];
  }

  async simulateWait() {
    return new Promise((res) => setTimeout(res, Math.random() * 2000));
  }

  async getSocials(): Promise<SocialCard[]> {
    await this.simulateWait();
    return this.socials;
  }

  async addNewSocial(newSocial: SocialCard) {
    await this.simulateWait();
    const temp = [...this.socials];
    temp.push(newSocial);
    this.socials = temp;
    return this.socials;
  }

  async updateSocial(id: string, updatedSocial: SocialCard) {
    await this.simulateWait();
    this.socials = this.socials.map((social) =>
      social.id === id ? { ...social, ...updatedSocial } : social
    );
  }

  async deleteSocial(id: string) {
    await this.simulateWait();
    this.socials = this.socials.filter((social) => social.id !== id);
  }
}

const mockApi = new MockAPI();

export default mockApi;
