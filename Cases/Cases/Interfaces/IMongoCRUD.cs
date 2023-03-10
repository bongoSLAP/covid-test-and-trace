using MongoDB.Driver;

namespace Cases.Interfaces
{
    public interface IMongoCRUD
    {
        public void InsertRecord<T>(string table, T record);
        public void InsertRange<T>(string table, List<T> record);
        public Task<T>? LoadFirstRecordByFilter<T>(string table, FilterDefinition<T> filter);
        public Task<List<T>>? LoadAllRecordsByFilter<T>(string table, FilterDefinition<T> filter);
        public Task<List<T>>? LoadAllRecords<T>(string table);
        public void UpsertRecordById<T>(string table, string id, T record);
        public void DeleteRecordByFilter<T>(string table, FilterDefinition<T> filter);
    }
}
