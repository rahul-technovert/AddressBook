namespace AddressBook.API.Concerns
{
    public static class Query
    {
        public static string GetAllCards { get; } = "SELECT * FROM ContactCardView";
        public static string GetContactById { get; } = "SELECT * FROM Contacts WHERE Id = @Id";
        public static string DeleteContactById { get; } = "DELETE FROM Contacts WHERE Id = @Id";
        public static string CreateContact { get; } = $"INSERT INTO Contacts (Name, Email, Address, Mobile, Landline, Website) " +
                                                      $"VALUES(@Name, @Email, @Address, @Mobile, @Landline, @Website); " +
                                                      $"SELECT CAST(SCOPE_IDENTITY() AS INT)";
        public static string UpdateContact { get; } = $"UPDATE Contacts SET Name = @Name, Email = @Email, Address = @Address, " +
                                                      $"Mobile = @Mobile, Landline = @Landline, Website = @Website " +
                                                      $"Where Id = @Id";
    }
}
